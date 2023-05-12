export const PageNotFound = (req, res) => {
    res.status(404).json({ error: 'page not found' });
};
