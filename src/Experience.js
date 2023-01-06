import { useFrame } from '@react-three/fiber'
import { useTexture, useGLTF, OrbitControls, Center, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'

export default function Experience()
{
    
    const { nodes } = useGLTF('./model/test-forest-scene-2.glb')

    const bakedTexture = useTexture('./model/baked-final-2.jpg');
    bakedTexture.flipY = false

    console.log(nodes)

    useFrame((state, delta) =>
    {
        // cube.current.rotation.y += delta * 0.2
    })

    return <>

        <EffectComposer>
            <DepthOfField 
                focusDistance={ 0.025 }
                focalLength={ 0.025 }
                bokehScale={ 6 }
            />

        </EffectComposer>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh
            geometry={  nodes.forestScene.geometry }
            position-z={ - 0.4 }
            position-x={ 0.5 }
            position-y={ - 0.26 }
            rotation-y={ Math.PI / 0.353}
        >
            <meshBasicMaterial map={ bakedTexture } />

        </mesh>
        
        <Sparkles 
            size={ 6 }
            scale={ [ 4, 2, 4 ] }
            position-y={ 1 }
            speed={ 0.2 }
            count={ 4 }
            color={ 'yellow' }
        />

    </>
}