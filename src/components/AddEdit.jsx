import '../style/AppEdit.css'
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function AddEdit({ user, onSave }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset(user);
    } else {
      reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
      });
    }
  }, [user]);

  const onSubmit = (dataForm) => {
    if (user) {
      onSave(dataForm, user.id);
    } else {
      onSave(dataForm);
    }
  };
  return (
    <div className='form'>
      <h2 className='form_title'>{user ? "Update" : "Register"}</h2>
      <form className='form_content' onSubmit={handleSubmit(onSubmit)}>
        <div className='form_group'>
          <label className='form_label'>First Name:</label>
          <input className='form_input' type="text" {...register("first_name")} />
        </div>
        <div className='form_group'>
          <label className='form_label'>Last Name:</label>
          <input className='form_input' type="text" {...register("last_name")} />
        </div>
        <div className='form_group'>
          <label className='form_label'>Email:</label>
          <input className='form_input' type="email" {...register("email")} />
        </div>
        <div className='form_group'>
          <label className='form_label'>Password:</label>
          <input className='form_input' type="password" {...register("password")} />
        </div>
        <div className='form_group'>
          <label className='form_label'>Birthday</label>
          <input className='form_input' type="date" {...register("birthday")} />
        </div>
        <button className='form_submit' type="submit">{user ? "Update" : "Save"}</button>
      </form>
    </div>
  );
}

export default AddEdit;
