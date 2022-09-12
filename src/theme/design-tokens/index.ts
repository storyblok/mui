import { light } from '@src/theme/design-tokens/palette'

export * from './palette'
export * from './typography'
export * from './transparency'

// Avatar variables
export const sb_avatar_small = `26px`
export const sb_avatar_normal = `32px`
export const sb_avatar_large = `46px`
//Datepicker variables
export const light_border = `1px solid ${light}`
//Box-shadow
export const box_shadow_default = `0 2px 17px 3px rgba(34, 42, 69, 0.07)`
//Transition
export const base_transition_duration = '0.1s'
export const base_transition_easing = 'ease-in-out'
export const base_transition = `all ${base_transition_duration} ${base_transition_easing}`
export const base_border_radius = 5

// Icon Sizes
export const icon_small_size = '1.6rem'
export const icon_default_size = '2.4rem'
export const icon_large_size = '3.2rem'
export const icon_extra_large_size = '4.8rem'
