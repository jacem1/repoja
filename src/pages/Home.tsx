import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const domains = ['Peintre', 'Électricien', 'Chauffeur', 'Jardinier']
const cities = ['Tunis', 'Bizerte', 'Nabeul']

export default function Home() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState({
    domain: '',
    city: ''
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/search?domain=${searchParams.domain}&city=${searchParams.city}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Trouvez votre bricoleur en Tunisie
        </h1>
        
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-4">
            <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
              Domaine
            </label>
            <select
              id="domain"
              value={searchParams.domain}
              onChange={(e) => setSearchParams({ ...searchParams, domain: e.target.value })}
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

          <div className="mb-6">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              Ville
            </label>
            <select
              id="city"
              value={searchParams.city}
              onChange={(e) => setSearchParams({ ...searchParams, city: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Sélectionnez une ville</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Rechercher
          </button>
        </form>

        <div className="text-center">
          <p className="mb-4">Vous êtes bricoleur ?</p>
          <button
            onClick={() => navigate('/register')}
            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors"
          >
            S'inscrire en tant que bricoleur
          </button>
        </div>
      </div>
    </div>
  )
} 