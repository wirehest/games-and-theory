def cakes(recipe, available):
    """Returns the maximum number of cakes that can be made, given a recipe
    and available ingredients.
    """
    ratios = []
    for ingredient in recipe.keys():
        avail_amount = available.get(ingredient, 0)
        if avail_amount == 0:
            return 0
        else:
            ratios.append(avail_amount // recipe[ingredient])
    
    return min(ratios)


assert cakes(
    recipe={"flour": 500, "sugar": 200, "eggs": 1},
    available={"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
    ) == 2

assert cakes(
    recipe={"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100},
    available = {"sugar": 500, "flour": 2000, "milk": 2000}
    ) == 0