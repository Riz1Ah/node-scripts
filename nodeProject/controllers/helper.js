const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const { exec } = require('child_process');

const filePath = path.join(__dirname, 'sample.yaml');

function editYAMLVariable(key, value) {
  try {
    const yamlData = yaml.load(fs.readFileSync(filePath, 'utf8'));

    yamlData[key] = value;

    const updatedYAML = yaml.dump(yamlData);

    fs.writeFileSync(filePath, updatedYAML, 'utf8');

    console.log(`Variable "${key}" in the YAML file has been updated.`);
  } catch (error) {
    console.error('Error editing YAML variable:', error);
  }
}

// Function to run an OS command
function runCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }
    console.log(`Command output: ${stdout}`);
  });
}

module.exports = { 
    editYAMLVariable,
    runCommand,
}