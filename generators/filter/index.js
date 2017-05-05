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
      name: 'filterName',
      message: 'Your filter name',
      default: 'myFilter'
        }, {
      type: 'input',
      name: 'ngapp',
      message: 'Filter is attached to which module?',
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

//    mkdirp.sync('src/modules/' + _.snakeCase(this.answers.ngapp) + '/controller');

    this.fs.copyTpl(
      this.templatePath('_myFilter.js'),
      this.destinationPath('src/modules/' + _.snakeCase(this.answers.ngapp) + '/filters/' + _.kebabCase(this.answers.filterName) + '.js'), {
        ngapp: _.kebabCase(this.answers.ngapp).replace(/-/g , "."),
        filterName: _.camelCase(this.answers.filterName)
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
