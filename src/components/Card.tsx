import { apply, tw } from "twind";

const floatShadowMap = [
    'shadow-xs',
    'shadow-sm',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-3xl',
]

function Card({class: _class, float: _float=0, "hover:float": hoverFloat=0, ...props}) {
    const defaultHover = floatShadowMap[Math.min(floatShadowMap.length-1, _float)]
    const maxHover = floatShadowMap[Math.min(floatShadowMap.length - 1, hoverFloat)]
    const cardCls = tw(apply`p-4 rounded-lg border-1 border-gray-200`, _float && apply(defaultHover), hoverFloat && apply`transition-all hover:${maxHover}`)
    return <div class={tw(cardCls, _class)} {...props} />
}

export default Card
