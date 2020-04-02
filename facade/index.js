class Storage {
  async _download() {}
  async _upload() {}
  async _deleteOldFiles() {}
  async _updateMetaData() {}

  async sync() {
    await this._download();
    await this._upload();
    await this._deleteOldFiles();
    await this._updateMetaData();
    console.log('Sync completed!');
  }
}

(async () => {
  const storage = new Storage();
  /**
   * This is a facade - we hide complex logic behind the scene
   */
  await storage.sync();
})();