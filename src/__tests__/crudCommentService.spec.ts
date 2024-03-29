/* eslint-disable no-undef */
import { PrismaClient } from '@prisma/client'
import { ErrorHandler } from './../errorHandler/errorHandler'

import {
    createComment,
    readComment,
    updateComment,
    deleteComment,
    readPublishedComments,
    ProcessCommentLike,
} from '../services/comments/crudCommentService'

const prisma = new PrismaClient()

beforeAll(async () => {
    // create user
    await prisma.user.createMany({
        data: [
            {
                email: 'flor@mundo.com',
                nickname: 'mariposa',
                firstName: 'ana',
                lastName: 'Zevallos',
                visibleEmail: false,
                visibleName: true,
                password: 'contrasena123',
                emailVerified: true,
                bio: 'estoy feliz de la vida',
                hashActivation: 'caracteresaleatorios1',
            },
            {
                email: 'rocio@mundo.com',
                nickname: 'corazon',
                firstName: 'rocio',
                lastName: 'Sanqui',
                visibleEmail: false,
                visibleName: true,
                password: 'contrasena456',
                emailVerified: false,
                bio: 'me gustan los chocolates',
                hashActivation: 'caracteresaleatorios2',
            },
        ],
    })

    console.log('✨ 2 users successfully created!')
    const date: Date = new Date(2021, 1, 12)
    // create products
    await prisma.post.createMany({
        data: [
            {
                title: 'mi primer postre',
                createdAt: date,
                content: 'mi primer postre que hice fue chocotorta',
                published: true,
                likesQuantity: 0,
                authorId: 1,
            },
            {
                title: 'manualidades',
                createdAt: date,
                content: 'realizar una almohada',
                published: true,
                likesQuantity: 1,
                authorId: 2,
            },
            {
                title: 'los rompecabezas',
                createdAt: date,
                content: '100 piezas',
                published: true,
                likesQuantity: 0,
                authorId: 2,
            },
        ],
    })
    console.log('✨ 3 posts successfully created!')

    // create the comment
    await prisma.comment.createMany({
        data: [
            {
                createdAt: date,
                content: 'delicioso',
                published: true,
                likesQuantity: 0,
                authorId: 1,
                postId: 1,
            },
            {
                createdAt: date,
                content: 'pasame la receta',
                published: false,
                likesQuantity: 1,
                authorId: 2,
                postId: 1,
            },
            {
                createdAt: date,
                content: 'cuales son los materiales',
                published: true,
                likesQuantity: 0,
                authorId: 2,
                postId: 2,
            },
        ],
    })

    console.log('✨ 4 comments successfully created!')

    await prisma.commentLikes.createMany({
        data: [
            {
                authorId: 1,
                commentId: 2,
            },
        ],
    })
})

// Test create a comment
const exampleComment = {
    content: 'El mejor comentario',
}
const emptyComment = {
    content: '',
}

describe('create a comment', () => {
    it('should return an error if we dont pass any content', async () => {
        await expect(createComment(1, '1', emptyComment)).rejects.toThrowError(
            ErrorHandler
        )
    })
    it('should return an error if we dont pass any content', async () => {
        await expect(createComment(1, '1', emptyComment)).rejects.toThrowError(
            ErrorHandler
        )
    })
    it('should create a comment', async () => {
        const postCreated = await createComment(1, '1', exampleComment)
        expect(postCreated.result).toHaveProperty(
            'content',
            'El mejor comentario'
        )
    })
})

// Test read comment
describe('read a comment', () => {
    it('should return a coment', async () => {
        const comment = await readComment('1', '1')
        expect(comment.result).toHaveProperty('content', 'delicioso')
    })
    it('should return an error if we pass a comment id that not exists', async () => {
        await expect(readComment('1', '100')).rejects.toThrowError(ErrorHandler)
    })
    it('should return an error if the comment is not realted to the post', async () => {
        await expect(readComment('2', '2')).rejects.toThrowError(ErrorHandler)
    })
})

// Test update

const exampleUpdate = {
    content: 'i purple you',
}

describe('update a comment', () => {
    it('should update a comment', async () => {
        const postCreated = await updateComment(1, '1', '1', exampleUpdate)
        expect(postCreated.result).toHaveProperty('content', 'i purple you')
    })
    it('should return an error if the comment does not exist', async () => {
        await expect(
            updateComment(1, '1', '100', exampleUpdate)
        ).rejects.toThrowError(Error)
    })

    it('should return an error if the comment is not related to a post', async () => {
        await expect(
            updateComment(2, '1', '3', exampleUpdate)
        ).rejects.toThrowError(Error)
    })

    it('should return an error if the comment is not related to the author', async () => {
        await expect(
            updateComment(1, '2', '3', exampleUpdate)
        ).rejects.toThrowError(Error)
    })
})

// Test read published comment
describe('read all published comments', () => {
    it('should all comments published', async () => {
        const comments = await readPublishedComments('1')
        expect(comments.result).toHaveLength(2)
    })
    it('should return null if we pass a post without comments', async () => {
        const comments = await readPublishedComments('3')
        expect(comments.result).toEqual('There are no published comments yet')
    })
    it('should return error if we pass a post id that not exists', async () => {
        await expect(readPublishedComments('100')).rejects.toThrowError(
            ErrorHandler
        )
    })
})

// Test process like

const jsonLike = {
    like: true,
}

const jsonDislike = {
    like: false,
}

describe('process like', () => {
    it('should return an error if the comment does not exist', async () => {
        await expect(
            ProcessCommentLike(1, '3', '100', jsonLike)
        ).rejects.toThrowError(ErrorHandler)
    })

    // Like
    it('should return 1 if we give a like to a comment that previously does not have any like', async () => {
        const postToLike = await ProcessCommentLike(2, '2', '3', jsonLike)
        console.log(postToLike)
        expect(postToLike.result).toEqual(1)
    })

    it('should return error if we give a like to a comment with like', async () => {
        await expect(
            ProcessCommentLike(1, '1', '2', jsonLike)
        ).rejects.toThrowError(ErrorHandler)
    })

    // Dislike
    it('should return 0 if we give a dislike to a comment that has 1 like', async () => {
        const postToDislike = await ProcessCommentLike(1, '1', '2', jsonDislike)
        console.log(postToDislike.result)
        expect(postToDislike.result).toEqual(0)
    })
    it('should return error if we give a dislike a comment that was not previously liked for user', async () => {
        await expect(
            ProcessCommentLike(2, '2', '2', jsonLike)
        ).rejects.toThrowError(ErrorHandler)
    })
})

// Test delete
describe('delete a comment', () => {
    it('should return comment deleted', async () => {
        const commentToDelete = await deleteComment(2, '2', '3')
        expect(commentToDelete.result).toHaveProperty(
            'content',
            'cuales son los materiales'
        )
    })
    it('should return an error if we past a comment that does not exist', async () => {
        await expect(deleteComment(1, '1', '100')).rejects.toThrowError(
            ErrorHandler
        )
    })

    it('should return an error if the comment does not belong to post', async () => {
        await expect(deleteComment(1, '2', '1')).rejects.toThrowError(
            ErrorHandler
        )
    })

    it('should return an error if the comment does not belong to user', async () => {
        await expect(deleteComment(2, '1', '1')).rejects.toThrowError(
            ErrorHandler
        )
    })
})

const clearDatabase = async function () {
    const tableNames = ['Comment', 'Post', 'User']
    try {
        for (const tableName of tableNames) {
            await prisma.$queryRaw(`DELETE FROM "${tableName}";`)
            if (!['Store'].includes(tableName)) {
                await prisma.$queryRaw(
                    `ALTER SEQUENCE "${tableName}_id_seq" RESTART WITH 1;`
                )
            }
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
    } finally {
        await prisma.$disconnect()
    }
}

afterAll(async () => {
    await clearDatabase()
    const deleteComment = prisma.comment.deleteMany()
    const deletePost = prisma.post.deleteMany()
    const deleteUserDetails = prisma.user.deleteMany()
    await prisma.$transaction([deleteUserDetails, deletePost, deleteComment])
    // await prisma.$disconnect()
})
