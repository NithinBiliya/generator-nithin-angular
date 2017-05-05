var Generator = require('yeoman-generator');

var mkdirp = require('mkdirp');

_ = require('lodash');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument('appname', {
      type: String,
      required: true
    });

    this.options.appname=_.kebabCase(this.options.appname);

    // And you can then access it later; e.g.
    this.log(this.options.appname);

    // Next, add your custom code
    //this.option('babel'); // This method adds support for a `--babel` flag

//    // This method adds support for a `--coffee` flag
//    this.option('coffee');
//
//    // And you can then access it later; e.g.
//    this.scriptSuffix = (this.options.coffee ? ".coffee" : ".js");


  }


  /*
  method1() {
    this.log('method 1 just ran');
  }

  _method2() {
    this.log('method 2 does not get called since it is private');
  } */

  initializing() {

  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'ngapp',
      message: 'ngapp',
      default: 'myApp'
        }, {
      type: 'input',
      name: 'ngctrl',
      message: 'ngctrl',
      default: 'myCtrl'
        }]).then((answers) => {
      this.answers = answers;
      this.log('ngapp', answers.ngapp);

    });
  }

  configuring() {

  }

  default () {

  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('_index.html'),
      this.destinationPath('src/index.html'), {
        appname: _.startCase(this.options.appname),
        ngapp: _.kebabCase(this.answers.ngapp).replace(/-/g , "."),
        ngctrl: _.camelCase(this.answers.ngctrl)
      }
    );

    mkdirp.sync('src/modules/' + _.snakeCase(this.answers.ngapp));

    this.fs.copyTpl(
      this.templatePath('modules/main.module/_main.module.js'),
      this.destinationPath('src/modules/' + _.snakeCase(this.answers.ngapp) + '/' + _.kebabCase(this.answers.ngapp) + '.module.js'), {
        ngapp: _.kebabCase(this.answers.ngapp).replace(/-/g , "."),
        ngctrl: _.camelCase(this.answers.ngctrl)
      }
    );

    mkdirp.sync('src/modules/' + _.snakeCase(this.answers.ngapp) + '/controllers');

    this.fs.copyTpl(
      this.templatePath('modules/main.module/controller/_myCtrl.js'),
      this.destinationPath('src/modules/' + _.snakeCase(this.answers.ngapp) + '/controllers/' + _.kebabCase(this.answers.ngctrl) + '.js'), {
        ngapp: _.kebabCase(this.answers.ngapp).replace(/-/g , "."),
        ngctrl: _.camelCase(this.answers.ngctrl)
      }
    );

    /*
      gulpfile: function() {

      },
      packageJSON: function() {

      },
      git: function() {

      },
      bower: function() {

      },
      appStaticFiles: function() {
        this.log('Template path - '+this.templatePath());
        this.log('Destination path - '+this.destinationPath());
        var source=this.templatePath('editorconfig');
        var destination=this.destinationPath('src/.editorconfig');

        this.copy('editorconfig','src/.editorconfig');

      },
      scripts: function() {

      },
      html: function() {

      }
      */
  }

  conflicts() {

  }

  install() {
    this.installDependencies({
      npm: true,
      bower: true,
      yarn: false
    });

  }

  end() {

  }

};
