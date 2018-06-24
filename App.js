import React,{Component} from 'react';
import  {View,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';
import axios from 'axios';

class App extends Component{
  constructor(props){
   super(props);
   this.state = {
    quote:null,
    author:null 
   }
   this.getQuotes = this.getQuotes.bind(this);
  }
   
   
  
  getQuotes(){
    var _this = this;
    var rand = Math.floor(Math.random() * 103);
    axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then((response)=>{
    _this.setState({
      quote : response.data["quotes"][rand]["quote"],
      author : response.data["quotes"][rand]["author"]
    })
    })
  }

  componentDidMount(){
   this.getQuotes();
  }

  render(){
    return(
      <View style={styles.QuoteStyles}>
       <View style={styles.QuoteContainerStyles}>
        <Text style={styles.textStyles}>{this.state.quote || "Loading"}</Text>
        <Text style={styles.authorStyles}>{this.state.author || ""}</Text>
        </View>
        <TouchableOpacity onPress={this.getQuotes}><Text style={styles.buttonStyles}>Next Quote</Text></TouchableOpacity>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  QuoteStyles:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },
  authorStyles:{
   fontSize:16,
   textAlign:'right',
   fontWeight:'bold'
  },
  textStyles:{
    fontSize:20,
    height:150,
    color:"blue"
  },
  buttonStyles:{
    padding:8,
    backgroundColor:'#AAA'
  },
  QuoteContainerStyles:{
    height:180
  }
});

export default App;