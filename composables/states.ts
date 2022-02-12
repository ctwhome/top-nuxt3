import { useState } from '#app'

export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
export const useText = () => useState<string>('text', () => 'Hello')
