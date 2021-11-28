import { PlaylistModel } from './playlist-model';

describe('PlaylistModel', () => {
    beforeEach(() => {});

    describe('constructor', () => {
        it('should create', () => {
            // Arrange

            // Act
            const playlist: PlaylistModel = new PlaylistModel('Playlist 1', '/home/user/Music/Dopamine/Playlists/Folder 1/Playlist1.m3u');

            // Assert
            expect(playlist).toBeDefined();
        });

        it('should set name', () => {
            // Arrange

            // Act
            const playlist: PlaylistModel = new PlaylistModel('Playlist 1', '/home/user/Music/Dopamine/Playlists/Folder 1/Playlist1.m3u');

            // Assert
            expect(playlist.name).toEqual('Playlist 1');
        });

        it('should set path', () => {
            // Arrange

            // Act
            const playlist: PlaylistModel = new PlaylistModel('Playlist 1', '/home/user/Music/Dopamine/Playlists/Folder 1/Playlist1.m3u');

            // Assert
            expect(playlist.path).toEqual('/home/user/Music/Dopamine/Playlists/Folder 1/Playlist1.m3u');
        });

        it('should initialize isSelected as false', () => {
            // Arrange

            // Act
            const playlist: PlaylistModel = new PlaylistModel('Playlist 1', '/home/user/Music/Dopamine/Playlists/Folder 1/Playlist1.m3u');

            // Assert
            expect(playlist.isSelected).toBeFalsy();
        });
    });
});