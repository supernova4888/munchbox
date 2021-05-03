
import Api from "./Api";
class ReviewApi{
    createReview(id,reviews){
        return Api.post('/posts/'+id+'/reviews',reviews)
    }
    getAllReviews(id){
        return Api.get('/posts/'+id+'/reviews');
    }
    updateReview(id,reviews){
        return Api.put('/posts/'+id+'/reviews',reviews);

    }
    deleteReview(id){
        return Api.delete('reviews/'+id);
    }
}
