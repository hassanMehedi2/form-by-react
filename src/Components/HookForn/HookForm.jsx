
import useInputState from '../../hookes/useInputState';

const HookForm = () => {
    // const [value ,setValue]= useInputState("rony");
    const nameState = useInputState("hassan");



    const handleSubmit =e=>{
        // console.log(value);
        console.log(nameState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={value} onChange={setValue}  type="text" name="name" /> */}
                <input {...nameState}  type="text" name="name" />
                <br />
                <input  type="email" name="email" />
                <br />
                <input  type="password" name="password"  required />
                <br />
                <input type="submit" />

            </form>
        </div>
    );
};

export default HookForm;