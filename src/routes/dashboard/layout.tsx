import { Slot, component$ } from '@builder.io/qwik';
import {type RequestEventLoader, routeLoader$ } from '@builder.io/qwik-city';
import Navbar from '~/components/shared/navbar/navbar';

export const useCheckAuthCookie = routeLoader$(({ cookie, redirect }: RequestEventLoader) => {
  const jwtCookie = cookie.get('jwt');

  if (jwtCookie) {
    return;
  }
  redirect(302, '/login')

})

export default component$(() => {
  return(
    <>
        <Navbar />
        <div class="flex  flex-col justify-center items-center mt-2">
            <h3 class="text-5xl">DashBoard Layout</h3>
            <Slot />
        </div>
    </>
  )
});