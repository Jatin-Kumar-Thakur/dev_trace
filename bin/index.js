#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askMongoURI = () => {
  return new Promise(resolve => {
    rl.question('🔐 Enter your MongoDB URI: ', uri => {
      rl.close();
      resolve(uri);
    });
  });
};

(async () => {
  const mongoUri = await askMongoURI();

  if (!mongoUri || !mongoUri.startsWith('mongodb')) {
    console.error('❌ Invalid MongoDB URI.');
    process.exit(1);
  }

  const currentDir = process.cwd();
  const targetPath = path.join(currentDir, 'devtrace-app');
  const templatePath = path.join(__dirname, '../template');

  await fs.copy(templatePath, targetPath);

  const backendEnvPath = path.join(targetPath, 'devtrace-backend', '.env');
  const backendEnvContent = `MONGO_URI=${mongoUri}\nPORT=5000\n`;
  fs.writeFileSync(backendEnvPath, backendEnvContent);

  console.log('\n✅ Devtrace project created successfully!');
  console.log('➡ Next Steps:');
  console.log(`1. cd devtrace-app/devtrace-backend && npm install && npm start`);
  console.log(`2. cd ../devtrace-frontend && npm install && npm start`);
})();
