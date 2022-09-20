import { apply, tw } from "twind";

function Button({ class: _class, color='blue', ...props }) {
    const buttonCls = apply`
    px-3 py-2
    appearance-none
    rounded-full
    ${`bg-${color}-500`}
    ${['transparent', 'gray'].includes(color) ? 'text-black' : 'text-white'}
    `
    return <button class={tw(buttonCls, _class)} {...props} />
}

export default Button
