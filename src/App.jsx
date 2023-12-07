
import './App.css'
import HookForm from './Components/HookForn/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  const handleSignUpSubmit = data=>{
    console.log('signup data '+ data.name+data.email);
  }
  const handleUpdateSubmit = data=>{
    console.log('Update data '+ data.name+data.email);
  }

  return (
    <>
      
      
        {/* <SimpleForm></SimpleForm> */}
        {/* <StatefulForm></StatefulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        <ReusableForm 
          formTitle={'Sign UP'} 
          handleSubmit={handleSignUpSubmit}>
          {/* // children prop  */}
          <div>
            <h2>sign Up</h2>
            <p>please Sign Up</p>
          </div>
          </ReusableForm>
        <br />
        <ReusableForm formTitle={'Update Profile'}
          handleSubmit={handleUpdateSubmit}
          submitBtnText='Update'>
            <div>
            <h2>Update</h2>
            <p>please Update</p>
          </div>
          </ReusableForm>
    </>
  )
}

export default App
