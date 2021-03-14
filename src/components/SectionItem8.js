import Section8 from './Section8'
const sectionItem8 = [

    {
        id: 1,
        name: 'Anglais'
    },
    {
        id: 2,
        name: 'Italien'
    },
    {
        id: 3,
        name: 'Arabe'
    },
 
  

]


const SectionItem8 = () =>  {
    return (
        <div className='SectionI8'>
            {sectionItem8.map((section8) => {
                return <Section8 key={section8.id} section8={section8} />
            })}
        </div>
    )
}

export default SectionItem8
