import React,{Component} from 'react';
import firebase from 'firebase';
import { Consumer } from '../config/context';
class login extends Component{




    constructor(){
        super();

        this.provider = new firebase.auth.GoogleAuthProvider();
    
    }
    log=(dispatch)=>{
        firebase.auth().signInWithPopup(this.provider).then(function(result) {
            
            //dispatch({type:'ADD_USER',payload:result.user})
            
           
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            //dispatch({type:'ADD_USER',payload:null})
            // ...
          });
    }
    render(){

        return(
            <Consumer>
                
                {
                    value=>{
                        const {dispatch} = value;

                        return(

                            <main>
                            <section className="image">
                                <img src="static/asset/hero2.png" />
                            </section>
                    <section className="text">
                        <article>
                        <h1> <span className="text_red">MyFiles</span></h1>
                        <p>Trusted storage solutions.</p>
                        <p></p>


                        <p>++ Fast</p>
                        <p>++ Easy to use</p>
                        <p>++ Good Security</p>
                        <p>++ Price: 10GB Free, 500GB for $4.99 per month</p>
                        <p></p>

                       
                        <a  onClick={this.log.bind(this,dispatch)} className="button_blue">Log in </a>
                    </article>
                    
                    </section>
                
                </main>
                           
                        )
                    }
                }
            </Consumer>
           
        )
    }
}

export default login;
