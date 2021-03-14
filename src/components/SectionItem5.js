import Section5 from './Section5.js'
const sectionItem5 = [

    {
        id: 1,
        name:'Décrivez en quelques ligne votre parcours professionel, vos competènces clés pour le poste et vos objectifs e carriere. Ceci st en fait une introduction à votre lettre  de motivation. Vous pouvez les presenter sous forme de puces ou en texte plain. '
   
    }


]


const SectionItem5 = () => {
    return (
        <div className='SectionI5'>
            {sectionItem5.map((section5) => {
                return <Section5 key={section5.id} section5={section5} />
            })}
        </div>
    )
}
export default SectionItem5;

