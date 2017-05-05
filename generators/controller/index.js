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
      name: 'ngctrl',
      message: 'Your controller name',
      default: 'myCtrl1'
        }, {
      type: 'input',
      name: 'ngapp',
      message: 'Controller is attached to which module?',
      default: 'myApp1'
        }]).then((answers) => {
      this.answers = answers;
    });
  }

  configuring() {

  }

  default () {

  }

  writing() {

//    mkdirp.sync('src/modules/' + _.snakeCase(this.answers.ngapp) + '/controllers');

    this.fs.copyTpl(
      this.templatePath('_myCtrl.js'),
      this.destinationPath('src/modules/' + _.snakeCase(this.answers.ngapp) + '/controllers/' + _.kebabCase(this.answers.ngctrl) + '.js'), {
        ngapp: _.kebabCase(this.answers.ngapp).replace(/-/g , "."),
        ngctrl: _.camelCase(this.answers.ngctrl)
      }
    );

  }

  conflicts() {

  }

  install() {

  }

  end() {

  }

};
