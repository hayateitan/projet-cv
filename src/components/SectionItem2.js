import Section2 from './Section2'
const sectionItem2  = [

    {
        id: 1,
        name: 'Diplome |    UNIVERISTE | 2000 - 2003 Decrivez les specialités de cette formation : Vos diplôme, les options de la formation, etc..... '
    },
    {
        id: 2,
        name: 'Diplome |    UNIVERISTE | 2000 - 2003 Decrivez les specialités de cette formation : Vos diplôme, les options de la formation, etc..... '
    },
    {
        id: 3,
        name: 'Diplome |    UNIVERISTE | 2000 - 2003 Decrivez les specialités de cette formation : Vos diplôme, les options de la formation, etc..... '
    },


]


const SectionItem2 = () => {
    return (
        <div className='SectionI2'>
            {sectionItem2.map((section2) => {
                return <Section2 key={section2.id} section2={section2} />
            })}
        </div>
    )
}
export default SectionItem2;

