CREATE TABLE IF NOT EXISTS "Team" (
    id SERIAL PRIMARY KEY,
    team_key VARCHAR NOT NULL,
    team_name VARCHAR NOT NULL,
    team_country VARCHAR NOT NULL,
    team_badge VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS "Match" (
    id SERIAL PRIMARY KEY,
    country_name VARCHAR NOT NULL,
    league_name VARCHAR NOT NULL,
    match_date VARCHAR NOT NULL,
    match_hometeam_id VARCHAR NOT NULL,
    match_hometeam_name VARCHAR NOT NULL,
    match_hometeam_score VARCHAR NOT NULL,
    match_awayteam_id VARCHAR NOT NULL,
    match_awayteam_name VARCHAR NOT NULL,
    match_awayteam_score VARCHAR NOT NULL,
    match_stadium VARCHAR NOT NULL,
    match_referee VARCHAR NOT NULL,
    team_home_badge VARCHAR NOT NULL,
    team_away_badge VARCHAR NOT NULL,
    league_logo VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS "Player" (
    id SERIAL PRIMARY KEY,
    player_name VARCHAR NOT NULL,
    player_number VARCHAR NOT NULL,
    player_type VARCHAR NOT NULL,
    player_age VARCHAR NOT NULL,
    player_match_played VARCHAR NOT NULL,
    player_goals VARCHAR NOT NULL,
    player_assists VARCHAR NOT NULL,
    player_birthdate VARCHAR NOT NULL,
    team_id INTEGER NOT NULL,
    FOREIGN KEY (team_id) REFERENCES "Team"(id)
);
