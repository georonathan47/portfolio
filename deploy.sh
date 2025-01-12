# CONFIGS
PORT=3010
APP_NAME="beckstec"
APP_PATH="/root/builds/beckstec"
REPO_URL="git@george:georonathan47/portfolio.git"
NODE_VERSION="20"

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment for ${APP_NAME}...${NC}"

# Create and clean application directory
if [ -d "$APP_PATH" ]; then
    # Backup any existing .git directory
    if [ -d "$APP_PATH/.git" ]; then
        mv "$APP_PATH/.git" "$APP_PATH/.git.bak"
    fi
    # Clean the directory but preserve .git if it exists
    rm -rf "$APP_PATH"/*
else
    mkdir -p "$APP_PATH"
fi

cd "$APP_PATH" || exit 1

# Restore .git if it was backed up
if [ -d "$APP_PATH/.git.bak" ]; then
    mv "$APP_PATH/.git.bak" "$APP_PATH/.git"
fi

# Clone or pull repository
if [ -d ".git" ]; then
    echo "Pulling latest changes..."
    git fetch --all
    git reset --hard origin/beckstec
else
    echo "Cloning repository..."
    git clone "$REPO_URL" .
    git checkout beckstec
fi

# Verify package.json exists
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found!"
    exit 1
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Clear npm cache and install dependencies
echo "Installing dependencies..."
npm cache clean --force
npm install

echo -e "${GREEN}Building frontend app ${APP_NAME}...${NC}"
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "Error: Build directory not found!"
    exit 1
fi

# Stop existing PM2 process if running
pm2 delete ${PM2_INSTANCE} || true

# Start new PM2 process
pm2 serve build/ $PORT --spa

pm2 restart ${APP_NAME} || pm2 start ${APP_NAME}

# Save PM2 process list and configure startup
pm2 save
pm2 startup

echo -e "${GREEN}Deployment completed successfully!${NC}"

# Display running processes
pm2 list

# Show logs
pm2 logs "$APP_NAME" --lines 50
