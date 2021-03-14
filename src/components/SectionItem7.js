import Section7 from './Section7'
const sectionItem7 = [

    {
        id: 1,
        name: 'Réactif'
    },
    {
        id: 2,
        name: 'Ambitieux'
    },
    {
        id: 3,
        name: 'Créatif'
    },
    {
        id: 4,
        name: 'Pugnace'
    },
    
  

]


const SectionItem7 = () => {
    return (
        <div className='SectionI7'>
            {sectionItem7.map((section7) => {
                return <Section7 key={section7.id} section7={section7} />
            })}
        </div>
    )
}

export default SectionItem7

