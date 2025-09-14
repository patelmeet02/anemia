import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import pandas as pd

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target
feature_names = iris.feature_names

# Convert to DataFrame for better visualization
df = pd.DataFrame(X, columns=feature_names)

# Apply KMeans clustering
kmeans = KMeans(n_clusters=3, random_state=42)
df['cluster'] = kmeans.fit_predict(X)

# Reduce dimensions to 2D using PCA for visualization
pca = PCA(n_components=2)
df['pca1'], df['pca2'] = zip(*pca.fit_transform(X))

# Plot the clusters
plt.figure(figsize=(8, 6))
sns.scatterplot(x='pca1', y='pca2', hue='cluster', data=df, palette='Set2', s=100)
plt.title('K-Means Clustering of Iris Dataset (PCA Projection)')
plt.xlabel('PCA Component 1')
plt.ylabel('PCA Component 2')
plt.legend(title='Cluster')
plt.grid(True)
plt.show()


