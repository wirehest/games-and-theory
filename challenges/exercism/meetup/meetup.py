import datetime as dt
import calendar

def meetup_day(yr, mo, da, mod):
    cal = calendar.Calendar()

    daydict = {
        "Sunday": 6,
        "Monday": 0,
        "Tuesday": 1,
        "Wednesday": 2,
        "Thursday": 3,
        "Friday": 4,
        "Saturday": 5
        }

    date_actual = None
    daylist = [x for x in cal.itermonthdays(yr, mo) if x!= 0]
    dates = []

    if mod == "teenth":
        daterange = [x for x in list(range(13, 20))]

        for d in daterange:
            if dt.date(yr, mo, d).weekday() == daydict[da]:
                date_actual = dt.date(yr, mo, d)

    if mod in ["1st", "2nd", "3rd", "4th", "5th"]:
        posdict = {
            "1st": 1,
            "2nd": 2,
            "3rd": 3,
            "4th": 4,
            "5th": 5
            }
        counter = 0

        for x in daylist:
            if calendar.weekday(yr, mo, x) == daydict[da] and counter < posdict[mod]:
                dates.append(x)
                counter += 1

            elif counter == posdict[mod]:
                date_actual = dt.date(yr, mo, max(dates))

    if mod == "last":
        for x in daylist:
            if calendar.weekday(yr, mo, x) == daydict[da]:
                dates.append(x)

        date_actual = dt.date(yr, mo, max(dates))

    if date_actual == None:
        raise Exception

    else:
        return date_actual
