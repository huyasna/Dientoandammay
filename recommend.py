import pandas as pd

#read csv files
ratings = pd.read_csv('./assets/ratings.csv')
similarities = pd.read_csv('./assets/similarities.csv', sep=',', header=None)
# cosine_sim = pd.read_csv('./assets/consine_sim.csv', sep=',', header=None)
# titles = movies_metadata['title']


def get_recommendations(userId):
    # sim_scores = list(enumerate(similarities[userId]))
    # sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    # sim_scores = sim_scores[1:31]
    # movie_indices = [i[0] for i in sim_scores]

    rp = ratings.pivot_table(index=['movieId'], columns=['userId'], values='rating')
    rating_c = ratings.loc[rp[userId][ratings.movieId].isnull().values & (ratings.userId != userId)]
    rating_c_similarity = rating_c['userId'].map(similarities[userId])
    rating_c = rating_c.assign(similarity=rating_c_similarity, sim_rating=rating_c_similarity * rating_c.rating)
    recommendations = rating_c.groupby('movieId').apply(lambda s: s.sim_rating.sum() / s.similarity.sum())
    recommendations = pd.DataFrame(recommendations).reset_index()
    recommendations.columns = ['movieId', 'score']
    recommendations = recommendations.dropna()
    above10 = recommendations[ (recommendations['score'] > 10)].index
    below0 = recommendations[ (recommendations['score'] < 0)].index
    recommendations.drop(above10 , inplace=True)
    recommendations.drop(below0 , inplace=True)
    return recommendations.sort_values(by=["score"], ascending=False)

    # return titles.iloc[movie_indices]

# print(get_recommendations(2, cosine_sim, titles).head(10))