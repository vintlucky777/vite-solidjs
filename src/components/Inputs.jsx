import { apply, tw } from "twind";

export function Input({ class: _class, ...props }) {
    const inputCls = apply`
    p-2
    block
    w-full
    appearance-none
    rounded
    border-1
    border-gray-300
    `
    return <input class={tw(inputCls, _class)} {...props} />
}
