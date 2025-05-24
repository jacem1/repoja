import { useSearchParams } from 'react-router-dom'

// Données de test
const testBricoleurs = [
  {
    id: 1,
    nom: 'Karim',
    prenom: 'Ben Ali',
    domaine: 'Électricien',
    age: 30,
    ville: 'Tunis',
    telephone: '22 333 444',
    email: 'karim@example.com'
  },
  {
    id: 2,
    nom: 'Mounir',
    prenom: 'Hammami',
    domaine: 'Chauffeur',
    age: 40,
    ville: 'Bizerte',
    telephone: '55 666 777',
    email: 'mounir@example.com'
  }
]

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const domain = searchParams.get('domain')
  const city = searchParams.get('city')

  const filteredBricoleurs = testBricoleurs.filter(
    bricoleur => bricoleur.domaine === domain && bricoleur.ville === city
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Résultats de recherche pour {domain} à {city}
      </h1>

      {filteredBricoleurs.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700">
            Aucun bricoleur trouvé pour ces critères.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredBricoleurs.map((bricoleur) => (
            <div
              key={bricoleur.id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-2">
                {bricoleur.prenom} {bricoleur.nom}
              </h2>
              <div className="text-gray-600 space-y-2">
                <p><span className="font-medium">Domaine:</span> {bricoleur.domaine}</p>
                <p><span className="font-medium">Âge:</span> {bricoleur.age} ans</p>
                <p><span className="font-medium">Ville:</span> {bricoleur.ville}</p>
                <p><span className="font-medium">Téléphone:</span> {bricoleur.telephone}</p>
                <p><span className="font-medium">Email:</span> {bricoleur.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 