import React from 'react'

const NewsLetter = () => {
    return (
        <div className="widget newsletter w-full max-w-md mx-auto p-4 bg-white border rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Abonnez-vous à notre Newsletter</h3>
            <form className="relative">
                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        placeholder=" "
                        className="peer w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        required
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 top-2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:left-3 peer-focus:text-blue-500"
                    >
                        Votre email
                    </label>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full p-3 text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-all"
                >
                    S'inscrire
                </button>
            </form>
        </div>

    )
}

export default NewsLetter