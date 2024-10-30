movies = [
    {"name": "Inception", "reviews": [10,9,9,8,9]},
    {"name": "Interstellar", "reviews": []},
    {"name": "Eric Chen", "reviews": [100000000000,1]}
    ]

def get_average():
    for i in movies:
        if len(i["reviews"]) != 0:
            avg = sum(i["reviews"])/len(i["reviews"])
            print(i["name"], avg)
        else:
            print(i["name"], "No Reviews")

get_average()