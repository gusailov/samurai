import  React  from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
return <> 

<form >
<div>
<div> < Field name={"login"} placeholder = {'Login'} component={'input'} /></div>
<div> <Field name={"password"} placeholder = {'Password'} component={'input'}/></div>
<div> <Field name={"rememberMe"} component={'input'} type = {'checkbox'}/>Remember me</div>
<div> <button>Login</button> </div>
</div>
    
</form>

</>
}
const Login = (props) => {
    return(
    <>
    <h1>  Login  </h1>
    <LogintReduxForm/>
    </>)
}


const LogintReduxForm = reduxForm ({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

 export default Login;