set -e
cd /home/ubuntu/portfolio-devesh || return

export NVM_DIR=$HOME/.nvm;

source $NVM_DIR/nvm.sh;

nvm use 16

git fetch --all

git reset --hard origin/main

yarn

cp .env dist/

pm2 startOrRestart ecosystem.config.js
