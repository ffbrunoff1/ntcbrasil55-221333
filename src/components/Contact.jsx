-800 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary/80">Seu Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-light/80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary-800 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary/80">Sua Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-light/80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary-800 focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-light bg-primary hover:bg-secondary transition-colors duration-300 disabled:bg-gray-400"
                  >
                    {status.submitting ? <Loader2 className="animate-spin" /> : 'Enviar Mensagem'}
                  </button>
                </div>
              </form>
              {status.success && <p className="mt-4 text-green-600 bg-green-100 p-3 rounded-md">{status.success}</p>}
              {status.error && <p className="mt-4 text-red-600 bg-red-100 p-3 rounded-md">{status.error}</p>}
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}