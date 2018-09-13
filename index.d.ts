import * as React from 'react'

export interface ITargetMap {
  [key: string]: React.ComponentClass
}

/**
 * @method reactMountElements
 * @param targetMap {ITargetMap} An object that maps element ids to the react component that should render there.
 */
export default function reactMountElements(targetMap: ITargetMap): void;

export {}
