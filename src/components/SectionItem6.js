import Section6 from './Section6'
const sectionItem6  = [

    {
        id: 1,
        name: 'Web'
      },
      {
        id: 2,
        name: 'UI |UX Design '
      },
      {
        id: 3,
        name: 'Graphic Design'
      },
      {
        id: 3,
        name: 'Brand Design'
      },
      {
        id: 3,
        name: 'Networking'
      },
      


]


const SectionItem6 = () => {
    return (
        <div className='SectionI6'>
            {sectionItem6.map((section6) => {
                return <Section6 key={section6.id} section6={section6} />
            })}
        </div>
    )
}
export default SectionItem6;

