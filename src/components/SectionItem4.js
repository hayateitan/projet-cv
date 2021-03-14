import Section4 from './Section4.js'
const sectionItem4 = [

    {
        id: 1,
        name: 'Décrivez vos centre dintérêts ou autres informations qui vous semblent important de faire apparaitresur votre CV' 
   
    }


]


const SectionItem4 = () => {
    return (
        <div className='SectionI4'>
            {sectionItem4.map((section4) => {
                return <Section4 key={section4.id} section4={section4} />
            })}
        </div>
    )
}
export default SectionItem4;

