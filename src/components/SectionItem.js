import Section from './Section'
const sectionItem = [

    {
        id: 1,
        name: 'Microsoft Cor .|     TITRE DU POSTE | 2000 - 2003 Decrivez ici les fonctions que vous avez occupé pour ce poste. Décrivez egalement vos missions et les resultats que vous avez obtenu. Nhesitez pas à les quabtifier.'
    },
    {
        id: 2,
        name: 'Microsoft Cor .|     TITRE DU POSTE | 2000 - 2003 Decrivez ici les fonctions que vous avez occupé pour ce poste. Décrivez egalement vos missions et les resultats que vous avez obtenu. Nhesitez pas à les quabtifier.'
    },
    {
        id: 3,
        name: 'Microsoft Cor .|     TITRE DU POSTE | 2000 - 2003 Decrivez ici les fonctions que vous avez occupé pour ce poste. Décrivez egalement vos missions et les resultats que vous avez obtenu. Nhesitez pas à les quabtifier.'
    },
    {
        id: 4,
        name: 'Microsoft Cor .|     TITRE DU POSTE | 2000 - 2003 Decrivez ici les fonctions que vous avez occupé pour ce poste. Décrivez egalement vos missions et les resultats que vous avez obtenu. Nhesitez pas à les quabtifier.'
    },
    {
        
    }

]


const SectionItem = () => {
    return (
        <div className='SectionI1'>
            {sectionItem.map((section) => {
                return <Section key={section.id} section={section} />
            })}
        </div>
    )
}

export default SectionItem;

