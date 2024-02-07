import RegisterForm from "components/RegisterForm/RegisterForm";
import icons from '../../assets/sprite.svg';
import photo from '../../assets/illustration.jpg';

const Register=()=>{
    return (<>
   <div><svg width="40px" height="40px"> <use href={icons + '#icon-Craftwork'}/></svg>
   <h3>VocabBuilder</h3></div>
   <img src={photo} alt="photoBG"/>
   <p>To start using our services, please fill out the registration form below. All fields are mandatory:</p>
   <h1>Register</h1>
    <RegisterForm/>
    </>)
}

export default Register;