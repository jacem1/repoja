import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const domains = ['Peintre', 'Électricien', 'Chauffeur', 'Jardinier']

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    domaine: '',
    telephone: '',
    email: '',
    age: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, nous pourrions envoyer les données à un backend
    console.log('Données du formulaire:', formData)
    // Redirection vers la page d'accueil après l'inscription
    navigate('/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Inscription en tant que bricoleur
        </h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="domaine" className="block text-sm font-medium text-gray-700 mb-2">
                Domaine
              </label>
              <select
                id="domaine"
                name="domaine"
                value={formData.domaine}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Sélectionnez un domaine</option>
                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Âge
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                min="18"
                max="100"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                pattern="[0-9]{2} [0-9]{3} [0-9]{3}"
                placeholder="22 333 444"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 