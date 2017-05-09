var Generator = require('yeoman-generator');

var mkdirp = require('mkdirp');

_ = require('lodash');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);


  }

  initializing() {

  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'moduleName',
      message: 'Your module name',
      default: 'moduleName'
        }]).then((answers) => {
      this.answers = answers;
    });
  }

  configuring() {

  }

  default () {

  }

  writing() {

    mkdirp.sync('src/modules/' + _.snakeCase(this.answers.moduleName));

    this.fs.copyTpl(
      this.templatePath('_myModule.js'),
      this.destinationPath('src/modules/' + _.snakeCase(this.answers.moduleName) + '/' +_.kebabCase(this.answers.moduleName) + '.js'), {
        moduleName: _.kebabCase(this.answers.moduleName).replace(/-/g , ".")
      }
    );

    mkdirp.sync('src/modules/' + _.snakeCase(this.answers.moduleName) + '/css');
    mkdirp.sync('src/modules/' + _.snakeCase(this.answers.moduleName) + '/html');


  }

  conflicts() {

  }

  install() {

  }

  end() {

  }

};
