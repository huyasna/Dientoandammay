import pandas as pd

#read csv files
# movies_metadata = pd.read_csv('./assets/small_movies_metadata.csv')
# cosine_sim = pd.read_csv('./assets/consine_sim.csv', sep=',', header=None)
# titles = movies_metadata['title']


def get_recommendations(index, cosine_sim, titles):
    sim_scores = list(enumerate(cosine_sim[index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    return titles.iloc[movie_indices]

# print(get_recommendations(2, cosine_sim, titles).head(10))