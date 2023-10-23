import { $, component$, useComputed$, useStore, useStylesScoped$ } from '@builder.io/qwik';

import styles from './login.css?inline';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

    useStylesScoped$(styles);

    const formState = useStore({
        email: '',
        password: '',
        formPosted:false,
    });
    
    const emailError = useComputed$(() => {
      if(formState.email.includes('@') ) return '';

      return 'not-valid'
    });
    const passwordError = useComputed$(() => {
        if(formState.password.length > 6 ) return '';
  
        return 'not-valid'
    });

      
    const isFormValid = useComputed$(() => {
        if ( emailError.value === 'not-valid' || passwordError.value === 'not-valid') return false;
        return true;
    });

    const onSubmit = $(() => {
        formState.formPosted = true;
        
        const {email, password} = formState;
        console.log({email, password});
    });

    return (
        <form onSubmit$={onSubmit}  class="login-form" preventdefault:submit>
            <div class="relative">
                <input 
                    class={formState.formPosted ? emailError.value : ''}
                    value={formState.email}
                    onInput$={$((e:Event) => formState.email = (e.target as HTMLInputElement).value)}
                    name="email" 
                    type="text" 
                    placeholder="Email address" 
                />
                <label for="email">Email Address</label>
            </div>
            <div class="relative">
                <input 
                    class={formState.formPosted ? passwordError.value : ''}
                    value={formState.password}
                    onInput$={$((e:Event) => formState.password = (e.target as HTMLInputElement).value)} 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                />
                <label for="password">Password</label>
            </div>
            <div class="relative">
                <button disabled={!isFormValid.value}  type='submit'>Ingresar</button>
            </div>


            <code>
                { JSON.stringify( formState, undefined , 2 ) }
            </code>
        </form>
    )
});

export const head: DocumentHead = {
    title: "Login Page",    
  };
  