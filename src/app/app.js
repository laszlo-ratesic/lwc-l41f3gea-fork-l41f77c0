// import module elements
import { LightningElement } from 'lwc';

// declare class to expose the component
export default class App extends LightningElement {
  bike = {
    name: 'Electra X4',
    picture:
      'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg',
  };
}
