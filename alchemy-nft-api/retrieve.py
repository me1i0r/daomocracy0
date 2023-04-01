import requests

url = "https://eth-mainnet.g.alchemy.com/nft/v2/docs-demo/getOwnersForToken?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44"

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)

print(response.text)