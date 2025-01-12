# CONFIGS
PORT=3010
APP_NAME="beckstec"
APP_PATH="/root/builds/beckstec"
REPO_URL="git@george:georonathan47/portfolio.git"
NODE_VERSION="20"

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Create application directory if it doesn't exist
 mkdir -p $APP_PATH
 cd $APP_PATH

echo -e "${GREEN}Starting deployment for ${APP_NAME}...${NC}"

# Pull latest code
if [ -d ".git" ]; then
    git pull origin beckstec
else
    git clone $REPO_URL .
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi

# Install node dependencies
npm i

echo "${GREEN}Building frontend app ${APP_NAME}...${NC}"
npm run build

# Deploy react app
cd ${REPO_PATH}
pm2 delete ${PM2_INSTANCE} || true


pm2 serve build/ ${PORT} --spa
#Configure pm2 process list and configure to start on system boot
pm2 save
pm2 startup

echo -e "${GREEN}Deployment completed successfully!${NC}"

# Display running processes
pm2 list

# Show logs
pm2 logs ${APP_NAME} --lines 50