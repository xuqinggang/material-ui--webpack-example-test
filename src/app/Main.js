/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {
  Component
} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {
  deepOrange500
} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TouchRipple from 'material-ui/internal/TouchRipple';
import CircleRipple from 'material-ui/internal/CircleRipple';
import EnhanceButton from 'material-ui/internal/EnhancedButton';
import IconButton from 'material-ui/IconButton';
// import Font from 'material-ui/internal/EnhancedButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    console.debug('TabsExampleControlled, handleChange')
    this.setState({
      value: value,
    });
  };

  render() {
    console.debug('TabsExampleControlled, render')
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Tab A" value="a" >
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

// const TabsExampleIcon = () => (
//   <Tabs>
//     <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
//     <Tab icon={<ActionFlightTakeoff />} />
//     <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
//   </Tabs>
// );



// const styles = {
//   container: {
//     textAlign: 'center',
//     paddingTop: 200,
//   },
// };

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
const iconStyles = {
  marginRight: 24,
};

const FontIconExampleSimple = () => (
  <div>
    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={blue500}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={red500}
      hoverColor={greenA200}
    />
  </div>
);
class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = (event) => {
    // alert('tab')
    console.log('tab', event)
    this.setState({
      open: true,
    });
  }

  handleClick = (event) => {
    // alert('click')
    console.log('click', event)
  }
  test() {
    console.log('test', this);
  }
  test2 = () => {
    console.log('test2', this);
  }
  render() {
    // this.test();
    // this.test2();
    const standardActions = [
      <FlatButton
        label="Ok"
        primary={true}
        // onTouchTap={this.handleRequestClose}
      />,
      <FlatButton
        label="Ok2"
        primary={true}
        // onTouchTap={this.handleRequestClose}
      />
    ];
    const iconStyles = {
  marginRight: 24,
  color: 'red',
};
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={styles.container}>1234
        <IconButton iconClassName="fa fa-cc-diners-club"></IconButton>
          <EnhanceButton centerRipple={true}>xxx1</EnhanceButton>

          <TouchRipple style={{width: '100px', height: '100px'}} color="red" >1231</TouchRipple>
          <TabsExampleControlled />
          33
          <div style={{position: 'relative'}}>
          <TouchRipple style={{width: '100px', height: '100px'}} centerRipple={true}>123</TouchRipple></div>
          <FontIconExampleSimple />
          {
            // <Dialog
            //           open={this.state.open}
            //           title="Super Secret Password"
            //           actions={standardActions}
            //           onRequestClose={this.handleRequestClose}
            //         >
            //           1-2-3-4-5
            //         </Dialog>

          // <h1>Material-UI</h1>
          // <h2>example project</h2>
          // <RaisedButton
          //   label="Super Secret Password"
          //   secondary={true}
          //   // onTouchTap={this.handleTouchTap}
          //   // onClick={this.handleClick}
          // />
        }
        </div>
      </MuiThemeProvider>
    );
  }
}

// var golbalTest;
// class Test {
//   test() {
//     golbalTest = this.test2;
//     // this.test2();
//     // console.log('test2')
//   }
//   test3() {
//     // this.test();
//     console.log('test233')
//   }
//   test2 = () => {
//     this.test3();
//     console.log(this, 'test34')
//   }
// }
// new Test().test();
// golbalTest();

// // 'use strict';

// var _createClass = function() {
//   function defineProperties(target, props) {
//     for (var i = 0; i < props.length; i++) {
//       var descriptor = props[i];
//       descriptor.enumerable = descriptor.enumerable || false;
//       descriptor.configurable = true;
//       if ("value" in descriptor) descriptor.writable = true;
//       Object.defineProperty(target, descriptor.key, descriptor);
//     }
//   }
//   return function(Constructor, protoProps, staticProps) {
//     if (protoProps) defineProperties(Constructor.prototype, protoProps);
//     if (staticProps) defineProperties(Constructor, staticProps);
//     return Constructor;
//   };
// }();

// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }

// var Test = function() {
//   function Test() {
//     _classCallCheck(this, Test);

//     this.test2 = function() {
//       console.log('test34');
//     };
//   }

//   _createClass(Test, [{
//     key: 'test',
//     value: function test() {
//       console.log('test2');
//     }
//   }, {
//     key: 'test3',
//     value: function test3() {
//       console.log('test23');
//     }
//   }]);

//   return Test;
// }();
// // Test();
// let test = {
//   test2: function() {
//     let test3 = () => {
//       console.log(this,123)
//     }
//     test3();
//   }
// }
// // var test4 = test.test2;
// test.test2();
// 
// 
class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }
  handleClick = (e) => {
      console.log(e);
  }
  componentDidMount() {
    console.log('child did');
  }
    componentWillUnmount () {
      console.log('child WillUnmount')
    }
  render() {
    console.log('Counter render')
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };
    return (
      <div style={textStyle}>
          {
            // <button onClick={this.handleClick}>123</button>
          }
         
  
        </div>
    );
  }
};
// var description = "\u003c\u21B7&lt;1p&#62;&#60;img src=&#34;http://oss-img.dinghuo123.com/product/detail/images/18931/d114aab5-8bb5-4214-82c3-71d1321a389e.png&#34; alt=&#34;&#34;/&#62;&#60;/p&#62;";
class CounterParent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      count: 0
    };
  }
  increase = (e, opt) => {
    console.debug('increase')
    // alert(opt)
    console.log(this, Object.keys(e), e, e.nativeEvent)
    this.setState({
      count: this.state.count + 1
    });
  }
  increase1 = (e) => {
    console.log(this, Object.keys(e), e, e.nativeEvent)
    // this.setState({
    //   count: this.state.count + 1
    // });
  }
  componentDidMount() {
    console.log('CounterParent did');
  }
  componentWillUnmount () {
      console.log('CounterParent WillUnmount')
    }
  handleTouchTap = (e) => {
    console.log('handleTouchTap', e)
  }
  render() {
    console.log('CounterParent render')
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };

    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };

    return (
      <div style={backgroundStyle}>
          {
            this.props.children
          }
          {
            <button onClick={this.increase} style={buttonStyle} >+</button>
            //<button onClick={this.increase1} >+</button>
          }
      </div>
    );
  }
};
const MyContainer = (WrappecCompoent) => {
  return class extends Component {
    componentDidMount () {
      console.log('MyContainer didMount')
    }
    render () {
      return (
        <WrappecCompoent>
          <Counter />
        </WrappecCompoent>
      )
    }
    componentWillUnmount () {
      console.log('1MyContainer WillUnmount')
    }
  }
}
// var s = '\\&#60;'
// console.log('&copy;' + '2222222222222' + s)
// export default MyContainer(CounterParent);
export default Main;