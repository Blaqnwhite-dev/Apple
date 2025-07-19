import { OrbitControls, PerspectiveCamera, View, Html } from '@react-three/drei'
import React, { Suspense } from 'react'
import { AmbientLight, Light } from 'three'
import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import Iphone from './iPhone';
import { div } from 'three/tsl';


const ModelView = ({index, groupRef, gsapType, controlRef, setrotationState, size, item}) => {
  return (
    <View 
        index={index}
        id={gsapType}
        className={ ` w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`} 
    >
        {/* Ambient Light  */}
        <ambientLight  intensity={0.3}/>

        <PerspectiveCamera makeDefault position={[0,0,4 ]}/>

        <Lights />

        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom= {false}
          enablePan={false}
          rotateSpeed={0.4}
          touch= {{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_ROTATE,
          }}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setrotationState(controlRef.current.getAzimuthalAngle())}
        />

        <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>
            <Suspense fallback={<Loader/>}>
            <Iphone
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              item={item}
              size={size}
            />
        </Suspense>
        </group>

      
    </View>
  )
}

export default ModelView